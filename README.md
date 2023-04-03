# AngularDemo
Demo Angular Project

## Dynamic routing on module load of an Angular Application

# Requirement

based on some logic we should decide whether to load TestComponent or DemoComponent.

# Implementation
Our decision here is made by a mock service that randomly decides which component to load. We can combine this for more complex scenario by making api calls in route resolvers to make such decisions based on backend data as well.

- using useFactory we have added the service as a dependency.
- The service has the data based on which we decide which component to load
- conditionally we return the route config by providing ROUTES using useFactory

# ROUTES
This is the Dependency Injection token used for router configuration. In angular when we request for some dependency it is searched through the token (in case of service that is the class name for example). Hence for routing configuration angular gets data from the token ‘ROUTES’ and if we update it, the new value is taken for the configuration.

# useFactory
we use this to provide token values during runtime based on some logic. We can also add dependencies using ‘deps’ array. The order of deps should be same in the callback function as well. In our example we pass demoService as a dependency.

multi: true is required when same token can give back multiple values. In this case we are returning an additional update config, hence this needs to be set to true.

# Conclusion
This is a very simple example, but using this concept the logic can be tweaked to real world scenarios wherein the decision is made from backend data received from api call or from some config file etc. The same logic applies for lazy loading configs as well.
