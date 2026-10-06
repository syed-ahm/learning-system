---
name: visualize
description: Add one correct, minimal picture to a lesson when shape, structure, or geometry carries the idea. Use for a dependency graph, a group diagram, a flow, a sequence, a state machine, a tree, or a spatial figure. Dispatch a maker subagent. Do not draw it yourself.
---

# Visualize

A picture earns its place only when it shows something words cannot: shape, structure, direction, relationship, or geometry. Produce one picture. A maker renders it, looks at the PNG, and returns the file. You embed that file.

You decide the idea and cut it to the fewest elements that carry it. You do not author the source and you do not render it.

Skip the picture when a sentence or one equation already carries the idea. A missing picture is cheaper than a false one.

A group diagram shows what belongs with what. A dependency diagram shows what rests on what. Draw the one the idea needs. Do not combine them.

## Makers

Dispatch with the Task tool. Foreground. Local. Do not request a cloud subagent, an isolated worktree, or read-only mode. The maker writes the source, runs the render script, and reads the PNG.

- `mermaid-maker` — nodes and edges: dependencies, groups, flows, sequences, state, trees. Default.
- `svg-maker` — positions and shapes: coordinates, number lines, vectors, plots, physical layouts.

Pass a concrete brief, the output directory `<workspace>/viz`, and the script directory `~/.cursor/learn/scripts`.

- Bad: "make a diagram about how TCP works"
- Good: "graph TD: 'packet' at the top; arrows down to 'ordering' and 'retransmit on loss'; both arrows into 'reliable stream'. No title. Show that reliability is built from packets."

If the brief has more than about 5–7 elements, cut it first.

The maker returns:

```
RESULT:
filename: viz-<slug>-<timestamp>.png
path: <absolute path>
```

`NONE` means there is no picture. Do not invent one. Do not author a replacement. You may show the mermaid or SVG source the maker wrote and say it was not checked as a picture.

## Embed

In the teaching reply, one sentence, then the image. Use the filename the maker returned.

```
![short description](viz/viz-<slug>-<timestamp>.png)
```

Put the same image in the lesson note. Do not narrate every element. The picture carries the idea.
