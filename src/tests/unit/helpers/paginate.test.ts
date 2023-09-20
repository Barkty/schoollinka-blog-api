import { getPagination, paginate } from "../../../helpers/paginate"

describe('A call to set pagination', () => {
    it('returns the limit and offset numbers', () => {
        const result = getPagination(1, 20)
        expect(result.offset).toEqual(20)
    })

    it('returns the total pages and docs', () => {
        const data = [ [], 20 ]
        const result = paginate(data, 1, 5)
        expect(result.totalItems).toEqual(20)
        expect(result.totalPages).toBe(4)
    })
})