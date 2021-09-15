import ReadingContext from '../enum/ReadingContext';
import ValueFormat from '../enum/ValueFormat';
import Measurand from '../enum/Measurand';
import Phase from '../enum/Phase';
import Location from '../enum/Location';
import Unit from '../enum/UnitOfMeasure';

export type SampledValue = {
    value: string,
    context?: ReadingContext,
    format?:ValueFormat,
    measurand?:Measurand,
    phase?:Phase,
    location?:Location;
    unit?:Unit
  }

  


