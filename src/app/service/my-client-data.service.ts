import { Injectable } from '@angular/core';
import { MyClient } from '../my-client-component/my-client.interface';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MyClientDataService {

    private _clientData: MyClient[] = [];

    private clientData$ = new Subject<MyClient[]>();

    constructor(private http: HttpClient) {
        this.http.get('../assets/my-clients.json').subscribe(
            (res) => {
                const data = res as any[];
                data.forEach(element => {
                    const myClient = {} as MyClient;
                    myClient.Id = element.id;
                    myClient.Name = element.name;
                    myClient.Image = element.number;
                    this._clientData.push(myClient);
                });
                this.clientData$.next(this._clientData);
            }
        );
    }

    public getData(): Observable<MyClient[]> {
        console.log('get data');
        return this.clientData$;
    }

    public updateData(myClient: MyClient) {
        this._clientData.push(myClient);
        this.clientData$.next(this._clientData);
    }
}
