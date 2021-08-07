from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "scam_harvester scam_timelord_launcher scam_timelord scam_farmer scam_full_node scam_wallet".split(),
    "node": "scam_full_node".split(),
    "harvester": "scam_harvester".split(),
    "farmer": "scam_harvester scam_farmer scam_full_node scam_wallet".split(),
    "farmer-no-wallet": "scam_harvester scam_farmer scam_full_node".split(),
    "farmer-only": "scam_farmer".split(),
    "timelord": "scam_timelord_launcher scam_timelord scam_full_node".split(),
    "timelord-only": "scam_timelord".split(),
    "timelord-launcher-only": "scam_timelord_launcher".split(),
    "wallet": "scam_wallet scam_full_node".split(),
    "wallet-only": "scam_wallet".split(),
    "introducer": "scam_introducer".split(),
    "simulator": "scam_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
