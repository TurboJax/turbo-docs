---
title: Configuration
description: The rundown on what you can and can't do with the config.
---

## General Configs
There are multiple score-related configs that allow you to determine how many effects players can get and even prevent them from being banned.

"Score" is how the plugin determines how many effects to give the player and what type they should be.  
Your score goes up when you kill a player, and goes down when you die.

`starting_score` is the score players should have when they start playing

### `starting_score`
#### Default Value: 0

### `max_score`
#### Default Value: 8

### `min_score`
#### Default Value: -9

### `ban_score`
#### Default Value: -9

### `revive_score`
#### Default Value: 0

### `max_positive`
#### Default Value: 8

### `max_negative`
#### Default Value: 8

### `positive_effects`

### `negative_effects`

### `effect_level`
#### Default Value: 1

### `override_levels`

Maps potion effect keys to specific levels.  Lets you specify the enhanced level of a potion effect if it needs to be different.  
By default, this sets the enhanced `strength` and `health_boost` level to 2.  

## Enhancer Configs

### `enhancer_duration`
#### Default Value: 90

Takes a whole number.  It's the amount of time the enhancer will boost your effects in seconds.

### `enhanced_level`
#### Default Value: 3

Takes a whole number.  It's the level that the positive effects will be boosted to.

### `enhanced_override_levels`

Maps potion effect keys to specific levels.  Lets you specify the enhanced level of a potion effect if it needs to be different.  
By default, this sets the enhanced `strength` and `health_boost` level to 2.  

## Recipe Configs
The three recipes in the config are for each of the custom items.  The recipe parser is pretty cool (imho).  
Each item has it's own recipe, and you can make it a shaped or a shapeless recipe using the `recipes.<key>.type` config.  The node's value can be either `shaped` or `shapeless`

### Shaped Recipes
Shaped Recipes map a material to an exact position on the crafting grid.  They have a `shape` and a list of `ingredients`.

#### `recipes.<key>.shape`
The `shape` key is a string array of three strings that are each three characters long.  The characters used can be any character as long as they are correctly mapped out in the `ingredients` section.  
To specify an empty slot, use the space key: ` `.  

#### `recipes.<key>.ingredients`
The `ingredients` key maps out different characters to ingame materials.  
The materials are represented as namespaced keys.  The `minecraft` namespace is implied and can be omitted.  

#### Example Shaped Recipe
```yml
recipes:
  infuse_effect:
    type: shaped
    shape:
      - "DND"
      - "DBD"
      - "DND"
    ingredients:
      D: diamond_block
      N: netherite_ingot
      B: glass_bottle
```

### Shapeless Recipes
Shapeless recipes just contain a list of ingredients that can be put into the crafting table in any order, just as long as they are there.  
If you require multiple of the same item, just repeat the key again.

#### `recipes.<key>.ingredients`
The `ingredients` key is a list of materials represented as namespaced keys.  
The `minecraft` namespace is implied and can be omitted

#### Example Shapeless Recipe
```yml
recipes:
  infuse_effect:
    type: shapeless
    ingredients:
      - diamond_block
      - diamond_block
      - diamond_block
      - diamond_block
      - diamond_block
      - diamond_block
      - netherite_ingot
      - netherite_ingot
      - glass_bottle
```

## Default Config:
```yml
# Starting score of any player.  A positive score will give the player that many positive effects.  A negative score will give the player that many negative effects.
# Can be any number between -max_negative and max_positive
starting_score: 0

# Max and minimum scores.  A player's score cannot go past these bounds.
max_score: 8
min_score: -9

# The score that a player will get banned at.
# Setting the score to anything >= 0 will disable deathbans.
# If the config is lower than min_score, players will not be banned.
ban_score: -9

# The score that a player will be set to when a reviver is used on them.
revive_score: 0

# Maximum number of positive effects a player can have.
# Should be between 0 and the number of effects in positive_effects
max_positive: 8

# Maximum number of negative effects a player can have.
# Should be between 0 and the number of effects in negative_effects
max_negative: 8

# A list of all the positive effects
# Use effects from here: https://jd.papermc.io/paper/26.2/org/bukkit/potion/PotionEffectType.html
# Effects should be in lowercase for proper conversion to NamespacedKeys
# Warning: Effect names may change across versions.  If you run into errors, look for a list for your version.
# You can also use custom effects defined in datapacks by their namespaced key
positive_effects:
- strength
- speed
- haste
- fire_resistance
- health_boost
- dolphins_grace
- luck
- water_breathing

# A list of all the negative effects
# Use effects from here: https://jd.papermc.io/paper/26.2/org/bukkit/potion/PotionEffectType.html
negative_effects:
- weakness
- slowness
- mining_fatigue
- jump_boost
- slow_falling
- glowing
- unluck
- hunger

# The default level of each effect
effect_level: 1

# Overrides for the "effect_level" config.
# Lets you change the level that a specific effect (positive or negative) will get boosted to.
override_levels:
  haste: 2

###
### Enhancer Configs
###

# The duration of the enhancer's effects in seconds
enhancer_duration: 90

# The level that your effects will be boosted to
enhanced_level: 3

# Overrides for the "boost_level" config.
# Lets you change the level specific effects get boosted to.
enhanced_override_levels:
  strength: 2
  health_boost: 2

###
### Recipes
###

recipes:
  infuse_effect:
    type: shaped
    shape:
      - "DND"
      - "DBD"
      - "DND"
    ingredients:
      D: diamond_block
      N: netherite_ingot
      B: glass_bottle
  reviver:
    type: shaped
    shape:
      - "GBE"
      - "DND"
      - "EBG"
    ingredients:
      D: dragon_breath
      N: nether_star
      B: netherite_block
      G: ghast_tear
      E: fermented_spider_eye
  enhancer:
    type: shaped
    shape:
      - "NGN"
      - "GBG"
      - "NGN"
    ingredients:
      G: enchanted_golden_apple
      N: netherite_ingot
      B: glass_bottle
```