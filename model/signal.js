class Signal {

    constructor(measurementName,timeStampFrom, timeStampTo) {
        this._measurementName = measurementName;
        this._timeStampFrom = timeStampFrom;
        this._timeStampTo = timeStampTo;
        this._measurementData = [];
    }


    addMeasurementData(measurementData) {
        this._measurementData.push(measurementData);
    }


}

module.exports(Signal);
