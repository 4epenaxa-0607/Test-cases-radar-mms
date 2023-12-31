"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method1 = void 0;
var Method2_1 = require("./Method2");
function Method1(N, collection) {
    return __awaiter(this, void 0, void 0, function () {
        var startTime, totalDocuments, count, randomIndexes, randomIndex, randomDocuments, endTime, executionTime, e_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log('метод 1');
                    startTime = performance.now();
                    return [4 /*yield*/, collection.countDocuments()];
                case 1:
                    totalDocuments = _a.sent();
                    count = Math.min(N, totalDocuments);
                    randomIndexes = [];
                    while (randomIndexes.length < count) {
                        randomIndex = Math.floor(Math.random() * totalDocuments);
                        if (!randomIndexes.includes(randomIndex)) {
                            randomIndexes.push(randomIndex);
                        }
                    }
                    return [4 /*yield*/, Promise.all(randomIndexes.map(function (index) { return __awaiter(_this, void 0, void 0, function () {
                            var document;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, collection
                                            .find()
                                            .skip(index)
                                            .limit(N)
                                            .project({ _id: 0, name: 1 })
                                            .toArray()];
                                    case 1:
                                        document = _b.sent();
                                        console.log((_a = document[0]) === null || _a === void 0 ? void 0 : _a.name);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    randomDocuments = _a.sent();
                    endTime = performance.now();
                    executionTime = endTime - startTime;
                    console.log("\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F: ".concat(executionTime, " \u043C\u0441"));
                    (0, Method2_1.Method2)(N, collection);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Method1 = Method1;
