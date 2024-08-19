import flag_VN from '../../static/flag/ic-flag-vn.svg'
import flag_USA from '../../static/flag/ic-flag-usa.svg'
import flag_KO from '../../static/flag/ic-flag-ko.svg'
import flag_CN from '../../static/flag/ic-flag-cn.svg'
export function getLanguage(lang: string): string {
    switch (lang) {
        case "vi": return flag_VN
        case "en": return flag_USA
        case "cn": return flag_CN
        case "ko": return flag_KO
        default: return flag_USA
    }
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0, // Không hiển thị phần thập phân
        maximumFractionDigits: 0
    }).format(amount);
}