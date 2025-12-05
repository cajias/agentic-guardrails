#!/bin/bash

# Standalone skill installation script
# Can be run manually if user skipped during postinstall

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$SCRIPT_DIR/postinstall.sh"
