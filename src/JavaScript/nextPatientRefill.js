/**
 * Given a list of prescription refills as (patientId, refillDate), return the next upcoming refill (earliest future date) for each patient.
give me simple solution in javascript
 */

function getNextRefills(refills) {
    const now = new Date()
    const refillRecord = {}
    for (let { patientId, refillDate } of refills) {
        const reDate = new Date(refillDate)

        if (reDate < now) continue

        if (!refillRecord[patientId] || reDate < new Date(refillRecord[patientId])) {
            refillRecord[patientId] = refillDate
        }
    }
    return refillRecord
}

const refills = [
    { patientId: "p1", refillDate: "2026-06-26" },
    { patientId: "p1", refillDate: "2026-06-20" },
    { patientId: "p1", refillDate: "2026-06-07" },
    { patientId: "p2", refillDate: "2026-06-15" },
]

console.log("and=", getNextRefills(refills))