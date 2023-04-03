import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
});

export class DemoService {
    loadRoute = Math.random() * 10 > 5;
    constructor() {}
}
