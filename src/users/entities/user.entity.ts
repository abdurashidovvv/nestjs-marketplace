import { CategoryEntity } from "src/categories/entities/category.entity";
import { ProductEntity } from "src/products/entities/product.entity";
import { Roles } from "src/utility/common/user-roles.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: String;
    @Column({ unique: true })
    email: String;
    @Column({ select: false })
    password: String;
    @Column({ type: 'enum', enum: Roles, array: true, default: [Roles.USER] })
    roles: Roles[];
    @CreateDateColumn()
    createdAt: Timestamp;
    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(()=>CategoryEntity, (cat)=>cat.addedBy)
    categories:CategoryEntity[];
    
    @OneToMany(()=>ProductEntity, (prod)=>prod.addedBy)
    products:ProductEntity[];
}
