import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Pessoa } from "./Pessoa";

@Entity("evento")
export class Evento {
    
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    participantes: string

    @ManyToOne(() => Pessoa)
    @JoinColumn({name: "participantes"})
    pessoa: Pessoa    

    @Column()
    data: Date

    @Column()
    horario: string

    constructor() {
        if (!this.id){
            this.id = uuid()
        }
    }
}