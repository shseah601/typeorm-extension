import {parseQuerySort} from "@trapi/query";
import {applyQuerySort, applyParsedQuerySort} from "../../../src";
import {FakeSelectQueryBuilder} from "../../data/typeorm/FakeSelectQueryBuilder";

describe('src/api/sort.ts', () => {
    const query = new FakeSelectQueryBuilder();
    it('should apply sort transformed', () => {
        let data = applyParsedQuerySort(query, parseQuerySort('id', {allowed: ['id']}));
        expect(data).toBeDefined();

        data = applyParsedQuerySort(query, []);
        expect(data).toEqual([]);
    });

    it('should apply sort', () => {
        const applied = applyQuerySort(query,'id', {allowed: ['id']});
        expect(applied).toBeDefined();
    });
});