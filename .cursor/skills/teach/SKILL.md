---
name: teach
description: Teach so a fact locks in as understanding. Use whenever the user wants to learn, understand, or be shown where an idea fits, including a short explanation of how an idea works. Probe, name the group, plan, teach one node at a time, and verify before stating an unsure fact.
---

# Teach

The goal is understanding. A fact should be derivable from foundations the learner already accepts, placed in a group, and connected to what it rests on. Memorized facts rot. Understood facts stay.

A short "what is X?" uses this same shape, smaller. Ordinary coding is not a lesson.

## Principles

**Unconditional truths first.** Start from the few facts the learner can accept as-is, with no caveat. They are the easiest thing to lock in, because nothing more fundamental will arrive later and contradict them. If a candidate needs "usually" or "except", it is not unconditional yet. Dig down. Confirm each one feels obvious before building on it.

An unconditional truth is how the fact is held. An axiom is a root that follows from nothing else. Use "unconditional truth" unless the fact really bottoms out.

Two strong shapes, when one is actually there: a universal ("all X are Y", "all X is done through {____}") and a real definition. A list of typical properties is not a definition.

**A motivated path.** A fact that feels arbitrary will not lock in. Walk how the learner could have discovered it. Start from why this problem exists. Motivate every step. Nothing appears from nowhere.

Socratic when the learner can reason to the step: they attempt it before you reveal it. Expository when the step is out of reach or they want it delivered. A socratic step with a right answer is still graded.

**Name the group.** A fact with no bucket does not lock in. A group is what kind of thing this is and what it sits with. A dependency is what it rests on. Say the group in the plan and on every node. A link between nodes is not a group.

## Verify before you speak

Accuracy is the condition for trust. One confident falsehood corrupts every node built on it.

Before you state a fact, name, date, formula, or definition you are even slightly unsure of, check it in this chat with `WebSearch`, then `WebFetch` when the snippet is not enough. Do not hand the search to a subagent. `WebSearch` and `WebFetch` do not run there.

Search results stay in the tool trace. The lesson the learner reads gets the verified claim only. If a check changes what you were about to teach, say so.

## Vault

The notes vault path is the `path` field in `~/.cursor/learn/vault.json`. It is prior knowledge, used to find a bucket the learner already has.

Search narrowly for the concept. Read the matching note. Do not walk the vault. It is a Google Drive folder. A read can fail or hang when a file is online-only or the machine is offline. If it fails, say the vault could not be read and keep teaching.

Never create, edit, rename, move, or delete anything in the vault.

If a matching bucket exists, teach the new idea as a member of it and use that note as the analogy. If none exists, the domain is new. Before the details, place the concept in that domain's larger picture, architectural or conceptual, and name the new group.

## Questions

Use `AskQuestion`. One question per call.

**No right answer** (what they want, whether a foundation feels solid, what to do next): options are genuine forks. Do not grade.

**A right answer** (probe, a socratic step, a check that a node landed): this is graded.

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

After they answer, and before you teach further, say whether it was right, a miss, or a gap. Give the right option and the explanation. An unconfirmed node is not built on.

The edge of their knowledge is bracketed: something at that level they get right, and something they miss. All correct means the questions were too easy. Go harder. One miss is not a reason to start teaching. Characterize it first. Map only the strands this lesson will use.

## The session

Run all three phases. Scale the size, not the shape.

**Probe.** Locate the edge on every strand the lesson will use, with graded questions. Separately, ask what they actually want until the goal is concrete. That question is not graded.

**Plan.** With the edge and the goal, decide the unconditional truths, which of them they already hold, the group, and the motivated path. Check anything you are unsure of. Then show the plan and stop.

The plan has two parts. A few sentences: what we will cover, in what order, and why, given their edge and their goal. A small dependency picture: foundations, then what hangs off them, with their goal at the end. Follow the visualize skill for that picture. A group picture is a separate brief, and only when the group itself is the hard part.

Stress-test every root. If it derives from something simpler they would accept at face value, push it down. Wait for their go-ahead. Do not start teaching before that.

**Teach.** For every node, foundational or derived:

1. Motivate why this node is needed now.
2. Establish it. A foundation is stated plainly, with no caveat. A derived step is built from what is already established, socratic or expository.
3. Connect it. Name the group, and show what it rests on.
4. Check it with a graded question. If they miss, repair this node before adding another.

If you are about to assert something they would have to take on faith, stop. Motivate it and check it, or ground it in something already established.

## Lesson note

Write `lessons/YYYY-MM-DD-<slug>.md` in the current workspace. Create it once the goal is concrete. Append as you go. Record their prompts, the lesson prose, each question before they answer, and the grade after. Do not record shell, search, or file-tool noise.

Use LaTeX for math. Inline `$f(x)$`. Display math fenced with `$$` on its own lines.

```markdown
# <goal>

## You

<their request>

## Plan

<the plan they approved>

## <node>

<lesson prose>

![short description](../viz/<filename>)

### Check

**Q:** <question>

1. <option>
2. I don't know

**Result:** correct | incorrect | gap
**Selected:** <what they picked>
**Right:** <the right option, omitted when you are still waiting>
**Explanation:** <why>
```

Write the question block before they answer. Add the result after. The right option is not in the file until then.

## Pictures

When a group or a dependency is clearer as a picture than as a sentence, follow the visualize skill. You choose the idea and cut it. A maker renders it and looks at it. You embed the file it returns. One picture per brief. Do not draw it yourself.
