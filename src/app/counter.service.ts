export class CounterService {
    activeToInactiveCounter = 0;
    inActiveToInactiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.inActiveToInactiveCounter++;
        console.log('Inactive to Active: ' + this.inActiveToInactiveCounter);
    }

}