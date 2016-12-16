import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
var PouchDB = require("pouchdb");

@Injectable()
export class PouchDBProvider {

    private isInstantiated: boolean;
    private database: any;
    private listener: EventEmitter<any> = new EventEmitter();

    public constructor() {
        if(!this.isInstantiated) {
            this.database = new PouchDB("nraboy");
            this.database.changes({
                live: true,
                include_docs: true
            }).on('change', change => {
                this.listener.emit(change);
            });
            this.isInstantiated = true;
        }
    }

    public get(id: string) {
        return this.database.get(id);
    }

    public put(document: any, id: string) {
        document._id = id;
        return this.get(id).then(result => {
            document._rev = result._rev;
            return this.database.put(document);
        }, error => {
            if(error.status == "404") {
                return this.database.put(document);
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        });
    }

    public sync(remote: string) {
        let remoteDatabase = new PouchDB(remote);
        this.database.sync(remoteDatabase, {
            live: true,
            retry: true
        });
    }

    public getChangeListener() {
        return this.listener;
    }

}
