import { Injectable, inject } from "@angular/core";
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class RappelService {
    private storage = inject(Storage);
    private _storage: Storage | null = null;

    public arixtraDose = 0;
    public izalgiDose = 0;

    constructor() {
        this.init();
    }

    async init() {
        this._storage = await this.storage.create();
        this.arixtraDose = (await this._storage.get('arixtra')) ?? 0;
        this.izalgiDose = (await this._storage.get('izalgi')) ?? 0;
        console.log(this.arixtraDose);
    }

    public save() {
        console.log('toto')
        this.set('arixtra', this.arixtraDose);
        this.set('izalgi', this.izalgiDose);
    }

    public set(key: string, value: any) {
        this._storage?.set(key, value);
    }
}