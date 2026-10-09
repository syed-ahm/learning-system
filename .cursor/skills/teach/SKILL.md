---
name: teach
description: Teach so a fact locks in as understanding. Use whenever the user wants to learn, understand, or be shown where an idea fits, including a short explanation of how an idea works. Run context, mechanism, judgment, then reconnect. Probe, name the group, plan, teach one node at a time, and verify before stating an unsure fact.
---

# Teach

The goal is understanding. A fact should be derivable from foundations the learner already accepts, placed in a group, and connected to what it rests on. Memorized facts rot. Understood facts stay.

A short "what is X?" uses this same shape, smaller. Context is a sentence or two. Ordinary coding is not a lesson.

## The cycle

Every lesson runs four passes, in this order. Probe, plan, and teach are the inside of the mechanism pass. They are not a second method.

1. **Context.** What problem this solves, which group it belongs to, and a rough reason to use it. This is a short map, not a foundation. Stop once that model is enough to make the mechanism meaningful. Do not survey. Do not teach tradeoffs yet. The opening stays a few sentences even when they already understand it.
2. **Mechanism.** How it works. What happens internally, and a small implementation or experiment when one would make the inside real. When the topic is not something you can run, the motivated derivation is the experiment. Inside this pass:
   - **Probe.** Find the edge on the mechanism strands this lesson will teach.
   - **Plan.** Show the order of those facts and wait.
   - **Teach.** For each fact: why it is needed, state it, connect it to its group and to what it rests on, then check it.
3. **Judgment.** Tradeoffs and the alternatives, including when not to use it. A tradeoff may say "usually" or "except." Do not keep digging for a caveat-free version of it. That digging is only for mechanism facts. An alternative is not a second group. A right distinction is graded. A preference about what to build is not.
4. **Reconnect.** Restate the opening picture and say what the mechanism and the tradeoffs changed. Reconnect may sharpen the group. It must not turn a support into a group, or a group into a support.

## Principles

**Unconditional truths are the order inside the mechanism.** They come after the context map. They are how "how it works" is taught. They are not the opening.

Start the mechanism from the few facts the learner can accept as-is, with no caveat. They are the easiest thing to lock in, because nothing more fundamental will arrive later and contradict them. If a mechanism fact needs "usually" or "except", it is not unconditional yet. Dig down. Confirm each one feels obvious before building on it. Do not do that digging to a tradeoff.

An unconditional truth is how the fact is held. An axiom is a root that follows from nothing else. Use "unconditional truth" unless the fact really bottoms out.

Two strong shapes, when one is actually there: a universal ("all X are Y", "all X is done through {____}") and a real definition. A list of typical properties is not a definition.

**A motivated path.** A fact that feels arbitrary will not lock in. Walk how the learner could have discovered it. The context pass says why the problem exists. Inside the mechanism, motivate every step. Nothing appears from nowhere.

Socratic when the learner can reason to the step: they attempt it before you reveal it. Expository when the step is out of reach or they want it delivered. A socratic step with a right answer is still graded.

**A group is not a link.** A fact with no group does not lock in.

- A group is the bucket: what kind of thing this is, and what it sits with. A DLL sits with ways of splitting a program.
- A link is a support: what this fact rests on. Loading a DLL rests on the linker resolving symbols.
- Knowing the support does not name the bucket. Naming the bucket does not show how it works.

Say the group in the plan and on every mechanism node. A group picture and a dependency picture are separate briefs. Do not combine them.

## Verify before you speak

Accuracy is the condition for trust. One confident falsehood corrupts every node built on it.

Before you state a fact, name, date, formula, or definition you are even slightly unsure of, check it in this chat with `WebSearch`, then `WebFetch` when the snippet is not enough. Do not hand the search to a subagent. `WebSearch` and `WebFetch` do not run there.

Search results stay in the tool trace. The lesson the learner reads gets the verified claim only. If a check changes what you were about to teach, say so.

## Vault

The notes vault path is the `path` field in `~/.cursor/learn/vault.json`. During context, search it narrowly for a group the learner already has. Read the matching note. Do not walk the vault. It is a Google Drive folder. A read can fail or hang when a file is online-only or the machine is offline. If it fails, say the vault could not be read and name the group from the larger picture anyway.

A group in the vault is usually a point in a markdown note, and its members are the subpoints under that point: nested bullets or headings beneath it. Look there first. Also look for a group that is only indirect, or missing as a written heading, when the notes still imply it. Use that group when it fits. Do not invent one the notes do not support.

Never create, edit, rename, move, or delete anything in the vault.

If a bucket they already have fits, use that group and that note as the analogy. If none fits, the domain is new. Name the new group from the domain's larger picture, architectural or conceptual, and say that it is new.

## Questions

Use `AskQuestion`. One question per call.

**No right answer** (what they want, whether a foundation feels solid, what to do next): options are genuine forks. Do not grade.

**A right answer** (a mechanism probe, a socratic step, a check that a node landed, a real distinction among alternatives): this is graded.

- Put the correct answer only in your own reasoning. It must not appear in the question, the details, or any option.
- Include an option whose id is `dont-know` and whose label is `I don't know`. That result is a gap, not a wrong guess.
- `Other` is a note about what they were thinking. It is not a grade.
- For several correct options, set `allow_multiple`. They are right only if the set matches exactly.
- Vary which position the right option is in.

Build the options so the right one does not stand out:

1. Every option is a bare claim. No "because". The reason goes in the explanation you give after they answer.
2. Write the correct claim, then write each distractor in the same shape, length, and register. Each distractor is a real mistake they might make, and it is still unambiguously wrong.
3. Bold nothing, or bold the parallel term in every option.

If you can tell which option is right without knowing the material, rewrite the set.

After they answer, and before you teach further, say whether it was right, a miss, or a gap. Give the right option and the explanation. An unconfirmed mechanism node is not built on.

The edge of their knowledge is bracketed on the mechanism strands this lesson will teach: something at that level they get right, and something they miss. All correct means those questions were too easy. Go harder. One miss is not a reason to start the mechanism. Characterize it first. This escalate-until-they-miss rule does not apply to the context sketch.

## The session

Run the four passes. Scale the size, not the shape.

**Context.** Choose the group with the vault check above. State the problem and a rough when and why. A few sentences. Then go on.

**Mechanism.** Probe, then plan, then teach.

Probe the mechanism strands this lesson will use. Separately, ask what they actually want until the goal is concrete. That question is not graded.

With the edge and the goal, decide the unconditional truths, which of them they already hold, and the motivated path. The group was named in context. Check anything you are unsure of. Then show the plan and stop.

The plan has two parts. A few sentences: what the mechanism will cover, in what order, and why, given where their edge sits and what they want. A small dependency picture: foundations, then what hangs off them, with their goal at the end. Follow the visualize skill for that picture. A group picture is a separate brief, and only when the group itself is the hard part.

Stress-test every root. If it derives from something simpler they would accept at face value, push it down. Wait for their go-ahead. Do not start teaching the mechanism before that.

For every mechanism node, foundational or derived:

1. Motivate why this node is needed now.
2. Establish it. A foundation is stated plainly, with no caveat. A derived step is built from what is already established, socratic or expository. When a small experiment would make this real, do that with them. Otherwise derive it.
3. Connect it. Name the group, and show what it rests on.
4. Check it with a graded question. If they miss, repair this node before adding another.

If you are about to assert a mechanism fact they would have to take on faith, stop. Motivate it and check it, or ground it in something already established.

**Judgment.** After the mechanism nodes you taught are confirmed, give the tradeoffs and the alternatives, including when not to use it. Keep the caveats.

**Reconnect.** Restate the context picture. Say what the mechanism and the tradeoffs changed about the group and about when to use it.

## Lesson note

Write `lessons/YYYY-MM-DD-<slug>.md` in the current workspace. Create it once the goal is concrete. Append as you go. Record their prompts, the lesson prose, each question before they answer, and the grade after. Do not record shell, search, or file-tool noise.

Use LaTeX for math. Inline `$f(x)$`. Display math fenced with `$$` on its own lines.

```markdown
# <goal>

## You

<their request>

## Context

<problem, group, short when and why>

## Mechanism

<the plan they approved>

### <node>

<lesson prose>

![short description](../viz/<filename>)

#### Check

**Q:** <question>

1. <option>
2. I don't know

**Result:** correct | incorrect | gap
**Selected:** <what they picked>
**Right:** <the right option, omitted when you are still waiting>
**Explanation:** <why>

## Judgment

<tradeoffs and alternatives, including when not to use it>

## Reconnect

<what changed in the opening picture>
```

Write the question block before they answer. Add the result after. The right option is not in the file until then.

## Pictures

When a group or a dependency is clearer as a picture than as a sentence, follow the visualize skill. You choose the idea and cut it. A maker renders it and looks at it. You embed the file it returns. One picture per brief. Do not draw it yourself. Do not put the group and the dependency in the same picture.
