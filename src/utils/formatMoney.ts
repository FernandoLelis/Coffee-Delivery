export function formatMoney(value: number) {
    return value.toLocaleString("pt-NR", {
        minimumFractionDigits: 2,
    })
}