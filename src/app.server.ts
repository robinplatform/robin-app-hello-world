import * as os from 'os';

export async function getOsPlatform() {
    return { platform: os.platform() }
}

