class RecentCounter {
    private queue: Array<number>;
    private head: number;
    constructor() {
        this.queue = [];
        this.head = 0;
    }

    ping(t: number): number {
        this.queue.push(t);
        // skip
        while (this.queue[this.head] < t - 3000) {
            this.head++;
        }
        return this.queue.length - this.head;
    }
}