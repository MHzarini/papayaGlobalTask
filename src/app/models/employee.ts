export class Employee {
    id: number;
    name: string;
    email: string;
    image: string;

    constructor(id: number, name?: string, email?: string, image?: string) {
        this.id = id;
        if (name) {
            this.name = name;
        }
        if (email) {
            this.email = email;
        }
        if (image) {
            this.image = image;
        }
    }
}