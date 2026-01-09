# Editors

## Neovim

The [`neovim/nvim-lspconfig`](https://github.com/neovim/nvim-lspconfig) has a
large number of presets for language servers, including `neocmakelsp`.
Install the plugin and add the following to your configuration:

```lua
-- init.lua

-- Configure the language server
vim.lsp.config("neocmake", { --[[ opts ]] })

-- Enable the language server
vim.lsp.enable("neocmake")
```

## Helix

As if version 25.07 Helix has built-in support for `neocmakelsp` and doesn't
require any additional setup.

## Emacs

Add the following to your Emacs configuration:

```emlisp
(use-package cmake-ts-mode
  :config
  (add-hook 'cmake-ts-mode-hook
    (defun setup-neocmakelsp ()
      (require 'eglot)
      (add-to-list 'eglot-server-programs `((cmake-ts-mode) . ("neocmakelsp" "stdio")))
      (eglot-ensure))))
```
