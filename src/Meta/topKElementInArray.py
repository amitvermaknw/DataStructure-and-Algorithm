class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hasMap = {}
        res = []
        for item in nums:
            if item in hasMap:
                hasMap[item] = 1 + hasMap.get(item, 0)
            else:
                hasMap[item] = 1
        
        sorted_hasMap = dict(sorted(hasMap.items(), key=lambda item: item[1], reverse=True))

        for key, value in sorted_hasMap.items():
            res.append(key)
            if len(res) == k:
                return res