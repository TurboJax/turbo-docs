---
title: Commands
description: The commands of InfuseV1 and how to use them
---

All of InfuseV1's commands are under the main `/infuse` command.

## /infuse help
### Requires `infusev1.help` permission

Shows the ingame help message.

```
/infuse
 |- help: Shows the help message
 |- reload: Reloads the config
 |- revive <target>: Revives a dead player
 |- setscore <targets> <score>: Sets a player's score.  Also rerolls their effects.
 |- getscore [targets]: Gets a player's score
 \- give <targets> <item> [count]: Gives a player an infuse item.
```

## /infuse reload
### Requires `infusev1.reload` permission
Reloads `config.yml`

## /infuse revive \<target>
### Requires `infusev1.revive` permission

Revives the target player and resets their score and effects.  
Use the tab completions as a reference.  

## /infuse getscore [targets]
### Requires `infusev1.getscore` permission

The `targets` parameter is optional.  By default, it will get your score.  
Multiple targets can be selected with `@` selectors.  
If you want to get someone else's score, you'll need the `infusev1.getscore.other` permission.  

## /infuse setscore \<targets> \<score>
### Requires `infusev1.setscore` permission

Manually sets a target's score.  
Multiple targets can be specified with `@` selectors.  
The new score is clamped between the minimum and maximum scores, and the target's effects are rerolled.  
If the score is set to the ban score, the player is banned.  

## /infuse give \<targedt> \<item> [count]
### Requires `infusev1.give` permission

Acts like /give but for the infuse items.  
Multiple targets can be selected with `@` selectors.  
The default count is 1, but you can give yourself multiple of the same item.  
Valid items are `enhancer`, `infuse_effect`, and `reviver`.  
