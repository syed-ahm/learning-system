# learn

Cursor teaching system, adapted from [amosblomqvist/learn](https://github.com/amosblomqvist/learn) ([video](https://www.youtube.com/watch?v=kzcI5F4tGiU)).

## How it works

A normal Agent chat follows the teach skill. A lesson runs context, mechanism, judgment, then reconnect. It asks what you know and what you want, names the group a new idea belongs to, and teaches one step at a time. Shaky facts are checked in that chat before they are said. The lesson is written to `lessons/` in the project you have open. Your notes vault is only read, to find a bucket you already have. A diagram maker is used only when a picture carries the idea, and it looks at the rendered image before the picture is shown.

## How to use it

Open any project in Cursor. Start a new Agent chat so the diagram makers are available. Ask to be taught something, and say if you want it short. Answer the questions. The note lands in `lessons/` in that project. The vault at `C:\Users\syed\Documents\local_drive\learning time notes` is read for buckets you already have and is never edited. If a note there is online-only, the lesson continues without it.

## Example

Ask:

```text
Teach me how DNS fits into the internet
```

What comes back is a couple of questions, then a short plan that names where DNS sits, then the lesson after you accept the plan. A picture shows up only if the group or the dependencies need one.
