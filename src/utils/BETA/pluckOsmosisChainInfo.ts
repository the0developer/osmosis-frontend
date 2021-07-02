import { chainInfoList } from '../../constants/BETA/chainInfo';

export function pluckOsmosisChainInfo() {
	const osmosisChainInfo = chainInfoList[0];
	if (osmosisChainInfo == null) {
		throw new Error('osmosis chainInfo does not exist in known chainInfoList');
	}
	return osmosisChainInfo;
}