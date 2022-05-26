import {render, screen} from "@testing-library/react";
import {Memo} from "./Memo";

test(
    'should show title, desc, date, finished',
    () => {
        const memoData = {
            title: 'title',
            desc: 'desc',
            date: new Date('2022-12-02'),
            finished: true
        }

        render(<Memo memo={memoData}/>)
        expect(screen.getByText(memoData.title)).toBeInTheDocument()
        expect(screen.getByText(memoData.desc)).toBeInTheDocument()

        expect(
            screen.getByText(
                memoData.date.toString().substring(0, 15)
            )
        ).toBeInTheDocument()

        expect(screen.getByText('Finished')).toBeInTheDocument()
    }
)

test(
    'should show "Pending" when memo finished is false',
    () => {
        const memoData = {
            finished: false
        }
        render(<Memo memo={memoData}/>)
        expect(screen.getByText('Pending')).toBeInTheDocument()
    }
)