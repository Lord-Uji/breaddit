"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210824002224 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210824002224 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20210824002224 = Migration20210824002224;
//# sourceMappingURL=Migration20210824002224.js.map