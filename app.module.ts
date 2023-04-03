@NgModule ({
    declarations: [AppComponent, DemoComponent, TestComponent],
    useFactory: (demoService: DemoService): Routes => {
        // any complex logic can be added here

        if (demoService.loadRoute) {
            return [
                {
                    path: '',
                    component: DemoComponent,
                },
            ];
        }
        return [
            {
                path: '',
                component: TestComponent,
            },
        ];
        },
        deps: [DemoService],
        multi: true,
    },
],
    bootStrap: [AppComponent],  
})

export class AppModule {}
