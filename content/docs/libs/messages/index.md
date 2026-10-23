---
title: TurboMessages
description: Messaging service with named placeholders and translations
icon: MessageSquare
---

So what's this do?  
I made this after wanting to be able to create translatable components that also had named placeholders.  
The base adventure library does have both translations and placeholders, but their named placeholders are treated as adventure tags, requiring you to make a custom Tag that the Component parser will translate into the value you want.  
It also requires you to use the `<key>` format, but I prefer the `%key%` format.  
To make it even more worthwhile, my `Message` objects can replace placeholders with Components, other Messages, or converts objects to strings with `Objects.toString()`.  
You can convert `Message` objects to a single `Component`, or you can split them on each newline to get a `List<Component>`.  (This is helpful for item lore!)  
I also made it append an empty component with `italic:false` to each line, letting you create item names and lore without worrying about putting `<i:false>` at the front of each line.  
`Message` also implements ComponentLike, allowing you to send raw Message objects to players without needing to convert them to Components yourself.

Translations are stored in YAML files in `lang/base`.  Currently, the program only reads the ".yml" extension, so ".yaml" won't work.  
Each translation *should* be key->value, but you can use more complex paths if you want.  
The translation stores support MiniMessage formatting, and you can use placeholders by surrounding them with "%" symbols.  

## Links
Source: https://github.com/turbojax/turbomessages  
Javadocs: https://maven.turbojax.org/javadoc/releases/org/turbojax/messages/1.2.1  

## Installation
**I use gradle with the kotlin DSL, so my docs currently only show how to use that setup.**  
Eventually, I may add other forms of this, but I don't know enough about react to do that.  
First things first, let's get the maven repo in your project.  
```kt
repositories {
    maven("https://maven.turbojax.org/releases")
}
```

Then, we can add the dependency.  It works best when shaded.  
```kt
dependencies {
    implementation("org.turbojax:messages:1.2.1")
}
```

## Usage
### Folder setup
In your `resources` folder, make `lang/base`.  
This is the collection of language files that should be overridden whenever there is an update.  
If end users want to override a translation, they create a file with the same name as the locale they override, then edit it. (ex: "en_US.yml")  
Then, they can just override the yaml key that the translation uses and it'll use the overridden message instead!  

#### Example override:
- lang/base/en_US.yml
  ```yml
  my_message: "Hello there!"
  message_2: "Hi"
  ```
- lang/en_US.yml
  ```yml
  my_message: "Hello world!"
  ```

As shown above, we have a file in `lang` and the base in `lang/base`.  They both define the `my_message` translatable component, so when it is used in the code, it'll print "Hello world!" instead of the default value.  
`message_2` is not overriden, so printing it results in no change.  

### Initialization
To use the library, you first need to set the location of the `lang` directory.  This tells the program where the translations are.  
You do this with `MessageManager#setLangDir`.  It takes a `File` object.  
Next, you'll use the MessageManager to recursively load files from `lang/base`.  
This is done by running `MessageManager.loadBaseFiles()`.  

### Creating Messages
Now you're ready to create your own messages!
To make a generic 