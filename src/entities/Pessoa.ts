import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("pessoa")
export class Pessoa {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}