"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class InviteUserDto {
    constructor() {
        this.email = '';
        this.role = '';
        this.department = '';
    }
}
exports.InviteUserDto = InviteUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invited User email via address', example: 'user@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], InviteUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invited role', example: 'Admin or member' }),
    (0, class_validator_1.IsString)({ message: 'Role must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Role is required' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Role must not exceed 50 characters' }),
    __metadata("design:type", String)
], InviteUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invited User department', example: 'IT' }),
    (0, class_validator_1.IsString)({ message: 'Department must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Department is required' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Department must not exceed 100 characters' }),
    __metadata("design:type", String)
], InviteUserDto.prototype, "department", void 0);
