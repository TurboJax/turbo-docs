---
title: TurboEvents
description: A lightweight event library for Turbo's mods.
icon: Zap
---

## Links
Source: https://github.com/turbojax/turboevents  
Javadocs: https://maven.turbojax.org/javadoc/releases/org/turbojax/events/1.0.0  

## Installation
**I use gradle with the kotlin DSL, so my docs currently only show how to use that setup.**  
Eventually, I may add other forms of this, but I don't know enough about react to do that.  
First things first, let's get the maven repo in your project.  
```kt
repositories {
    maven("https://maven.turbojax.org/releases")
}
```

Then, we can add the dependency.
```kt
dependencies {
    implementation("org.turbojax:events:1.0.0")
}
```

## Usage
### Event and Cancellable
`Event` is the common interface of all events.  It contains no functions to override, so it's mostly just used to easily mark events.  
The system also provides the `Cancellable` interface, which extends `Event` and provides `Cancellable#isCancelled` and `Cancellable#setCancelled` to let you control the end state of an event. (Though cancellation is actually interpreted by the code calling the event).  

### Listeners
`Listener` is an interface that marks a class as containing subscriber methods.  These methods are captured by the EventManager when the Listener is registered.  
All subscriber methods must have 1 parameter, that being the event to listen for, and also have the void return type.
To note a subscriber method, you must also use the `@Subscribe` annotation.  
This annotation also has an `ignoreCancelled` parameter that allows your subscriber to still run after an event was cancelled.

### EventManager
The `EventManager` is the class that actually handles registering/unregistering listeners, and it provides a function that is used to call an event.  
All of EventManager's functions are static.  