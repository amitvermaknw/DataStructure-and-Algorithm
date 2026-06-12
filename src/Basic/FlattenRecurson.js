let data = {
    memberId: "M1",
    claims: [
        {
            id: 101,
            diagnoses: ["A", "B"]
        }
    ]
}

/**
 * Output should be [
 {claimId:101, diagnosis:"A"},
 {claimId:101, diagnosis:"B"}
]
 */

let response = []

function rec(node) {
    if (!node) return;

    if (Array.isArray(node)) {
        for (const item of node) {
            rec(item);
        }
        return;
    }

    if (typeof node === 'object') {
        if ("id" in node && "diagnoses" in node && Array.isArray(node.diagnoses)) {
            for (const d of node.diagnoses) {
                response.push({
                    claimId: node.id,
                    diagnosis: d
                })
            }
        }
        for (const key in node) {
            rec(node[key])
        }
    }
}

rec(data)
console.log(response)

