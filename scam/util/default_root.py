import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SCAM_ROOT", "~/.scam/mainnet"))).resolve()
