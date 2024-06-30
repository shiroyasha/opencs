# Text editing with Vim

Vim is a powerful text editor that is available on almost any platform, including
Linux, macOS, and Windows. It is focused on speed and efficiency, and its editing
model is especially well-suited for programming, essay writing, and scientific
writing.

Vim is avoiding the use of the mouse, the arrow keys, and even the modifier keys such
as `Ctrl`, `Alt`, and `Shift` that are relying on the heavy use of the pinky finger 
that is known to cause repetitive strain injuries, and carpal tunnel syndrome.

Even if you are not planning to use Vim as your primary text editor, it is worth
learning the basics of Vim because it is available on almost any platform, and it is
often the only text editor available on remote servers. Vim-mode is also available in
many other text editors, such as Visual Studio Code, Atom, and Sublime Text.

## Vim philosophy

Vim is based on the philosophy of modal editing, which means that the same keys can
perform different tasks depending on the mode you are in. This allows you to perform
editing tasks more efficiently because you do not have to move your hands away from
the home row to press modifier keys.

Vim is also based on the philosophy of composability, which means that you can combine
commands to perform more complex tasks. This allows you to perform editing tasks more
efficiently because you do not have to move your hands away from the home row to press
modifier keys.

## Vi, Vim, and Neovim

Vi was the original text editor that was created by Bill Joy in 1976. Vim is a
modernized version of Vi that was created by Bram Moolenaar in 1991. Neovim is a
modernized version of Vim that was created by Thiago de Arruda in 2014.

In this course, we will be using Vim because it is the most widely used version of Vi
and it is available on almost any platform. However, the commands that we will be
learning are compatible with Vi and Neovim.

## Starting Vim

To start Vim, open a terminal and type `vim` followed by the name of the file you
want to edit.

```
vim example.txt
```

If the file does not exist, Vim will create a new file with that name.

## Modes

Vim has several modes that allow you to perform different tasks. The most important
modes are:

- **Normal mode**: This is the default mode that you are in when you start Vim. In
  this mode, you can navigate the file, delete text, copy text, paste text, and
  perform other editing tasks.

- **Insert mode**: In this mode, you can insert text into the file. You can enter
  Insert mode by pressing `i` in Normal mode, and you can exit Insert mode by
  pressing `Esc`.

- **Command-line mode**: In this mode, you can enter commands. You can enter
  Command-line mode by pressing `:` in Normal mode, and you can exit Command-line
  mode by pressing `Esc`.

- **Visual mode**: In this mode, you can select text. You can enter Visual mode by
  pressing `v` in Normal mode, and you can exit Visual mode by pressing `Esc`.

- **Visual Line mode**: In this mode, you can select lines of text. You can enter
  Visual Line mode by pressing `V` in Normal mode, and you can exit Visual Line mode
  by pressing `Esc`.

- **Visual Block mode**: In this mode, you can select blocks of text. You can enter
  Visual Block mode by pressing `Ctrl-v` in Normal mode, and you can exit Visual Block
  mode by pressing `Esc`.

## Navigation

Vim has several commands that allow you to navigate the file. The most important
commands are:

- `h`: Move the cursor one character to the left.
- `j`: Move the cursor one line down.
- `k`: Move the cursor one line up.
- `l`: Move the cursor one character to the right.

Appart from the basic navigation commands, it is common to use the following commands
for faster navigation:

- `w`: (word) Move the cursor to the beginning of the next word.
- `b`: (back) Move the cursor to the beginning of the previous word.
- `e`: (end) Move the cursor to the end of the current word.

## Editing

Vim has several commands that allow you to edit the file. The most important commands
are:

- `yy`: (yank) Copy the current line.
- `dd`: (delete) Delete the current line.
- `p`: (paste) Paste the copied or deleted text after the current line.
- `u`: (undo) Undo the last change.
- `o`: (open) Insert a new line below the current line and enter Insert mode.

## Saving and quitting

To save a file, enter Command-line mode by pressing `:` in Normal mode, and then
enter the `w` command.

```
:w
```

To quit Vim, enter Command-line mode by pressing `:` in Normal mode, and then enter
the `q` command.

```
:q
```

To save and quit Vim in a single command, enter Command-line mode by pressing `:` in
Normal mode, and then enter the `wq` command.

```
:wq
```

## Searching

To search for a pattern in the file type `/` in Normal mode, and then enter the
pattern you want to search for.

```
/example
```

To search for the next occurrence of the pattern, type `N` in Normal mode.
To search for the previous occurrence of the pattern, type `n` in Normal mode.

Type `#` in Normal mode to search for the word under the cursor.

## Quiz

1. What is Vim?
2. Why are we learning Vim, why not another text editor?
3. What is the philosophy of Vim?
4. What releases of Vi are we going to use in this course?
5. Can you use Vim on Windows?
6. How do you start Vim?
7. Can you use the commands in other text editors?
8. Can you use the mouse in Vim?
9. Can you use the arrow keys in Vim?

### Modes

1. What are the most important modes in Vim?
2. What can you do in Normal mode?
3. How do you enter Insert mode?
4. How do you exit Insert mode?
5. How do you enter Command-line mode?
6. How do you exit Command-line mode?
7. How do you enter Visual mode?
8. How do you exit Visual mode?
9. What happens when you exit Visual mode?
10. How do you enter Visual Line mode?
11. How do you exit Visual Line mode?
12. How do you enter Visual Block mode?
13. How do you exit Visual Block mode?

### Navigation

1. What are the basic navigation commands in Vim?
2. What does `h` do?
3. What does `j` do?
4. What does `k` do?
5. What does `l` do?
6. What does `w` do?
7. What does `b` do?
8. What does `e` do?

### Editing

1. How do you deleted a line in Vim?
2. How do you copy a line in Vim?
3. How do you paste a line in Vim?
4. How do you undo the last change in Vim?
5. How do you insert a new line below the current line in Vim?
6. How do you delete a word in Vim?
7. How do you copy a word in Vim?
8. How do you paste a word in Vim?

### Saving and quitting

1. How do you save a file in Vim?
2. How do you quit Vim?
3. How do you save and quit Vim in a single command?

### Searching

1. How do you search for a pattern in Vim?
2. How do you search for the next occurrence of the pattern?
3. How do you search for the previous occurrence of the pattern?
4. How do you search for the word under the cursor?
