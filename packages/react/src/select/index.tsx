import { CdsSelect as SelectInput } from '@cds/core/select';
import '@cds/core/select/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsSelect = createComponent('cds-select', SelectInput);
