import { Injectable, OnDestroy } from '@angular/core';
import { MyClient } from '../my-client-component/my-client.interface';
import { Subject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MyClientDataService implements OnDestroy {

    private _clientData: MyClient[] = [];

    private subscriptions: Subscription = Subscription.EMPTY;

    private clientData$ = new Subject<MyClient[]>();

    constructor(private http: HttpClient) {
        this.subscriptions = this.http.get('../assets/my-clients.json').subscribe(
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

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
