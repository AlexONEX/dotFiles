local options = {
  ensure_installed = {
    "bash-language-server",
    "lua-language-server",
    "clangd", -- LSP para C y C++
    "html", -- LSP para HTML
    "pyright", -- LSP para Python
    "rust_analyzer", -- LSP para Rust
    "terraformls", -- LSP para Terraform
    "texlab", -- LSP para LaTeX
    "tsserver", -- LSP para TypeScript y JavaScript
    "yamlls", -- LSP para YAML
    "zls", -- LSP para Zig
    -- Daps
    "codelldb",
  },

  PATH = "skip",

  ui = {
    icons = {
      package_pending = " ",
      package_installed = "󰄳 ",
      package_uninstalled = " 󰚌",
    },

    keymaps = {
      toggle_server_expand = "<CR>",
      install_server = "i",
      update_server = "u",
      check_server_version = "c",
      update_all_servers = "U",
      check_outdated_servers = "C",
      uninstall_server = "X",
      cancel_installation = "<C-c>",
    },
  },
  --max_concurrent_installers = 10,
}

return options
