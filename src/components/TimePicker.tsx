import { Dayjs } from 'dayjs'
import * as React from 'react'
import DatePicker from './DatePicker'
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker'
import { Omit } from 'antd/es/_util/type'

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, 'picker'>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
})

TimePicker.displayName = 'TimePicker'

export default TimePicker
