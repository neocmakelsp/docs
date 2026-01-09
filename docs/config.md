# Configuration Reference

The configuration file can either be named `.neocmake.toml` or
`.neocmakelint.toml` and is resolved in the current project directory.
If neither is found, a user configuration file in `$XDG_CONFIG_DIR/neocmakelsp`
either named `config.toml` or `lint.toml` can be used.

::: info

Only a single configuration file will be used. The first file found in the
order described above will be used.

:::

## Top-Level Configuration

### `command_upcase`

- **Type:** String
- **Description:** Enable linting of consistency in command casing.
- **Valid values**:
  - `"ignore"`: Do not check command casing.
  - `"upcase"`: Commands must be uppercase.
  - `"lowercase"`: Commands must be lowercase.
- **Default:** `"ignore"`
- **Example:**

```toml
# Lint lowercase commands.
command_upcase = "upcase"
```

### `enable_external_cmake_lint`

- **Type:** Boolean
- **Description:** Enable linting with [`cmake-lint`](https://github.com/cmake-lint/cmake-lint).
- **Default:** `false`
- **Example:**

```toml
# Run `cmake-lint` as part of the linting process.
enable_external_cmake_lint = true
```

### `line_words_max`

- **Type:** Integer
- **Description:** Maximum number of words allowed on a single line.
- **Default:** `80`
- **Example:**

```toml
# Set maximum line length to 100 characters.
line_words_max = 100
```

## Format Configuration

### `program`

- **Type:** String
- **Description:** External program to use for auto-formatting.
- **Default:** Unset
- **Example:**

```toml
[format]
# Format with an external formatter.
program = "gersemi"
```

### `args`

- **Type:** Array of strings
- **Description:** Extra arguments to pass to the formatting program.
- **Default:** Unset
- **Example:**

```toml
[format]
program = "gersemi"
# Use two space indentation.
args = ["--indent", "2"]
```
