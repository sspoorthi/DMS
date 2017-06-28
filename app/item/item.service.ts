import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Nixon", role: "Idea/Guide" },
        { id: 2, name: "Pallavi", role: "Analyst/UI Designer/Guide" },
        { id: 3, name: "Spoorthi", role: "Developer" },
        { id: 4, name: "Gowtham", role: "Developer" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
