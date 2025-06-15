class TemplateUtils {
    markerAssignRegionsID = (markers: Square[]): SquareWithId[] => {
        const withCenters = markers.map((m) => ({
            ...m,
            cx: (m.sx + m.ex) / 2,
            cy: (m.sy + m.ey) / 2,
        }));

        // find horizontal threshold at the average of the middle two centers
        const sortedCx = withCenters.map((m) => m.cx).sort((a, b) => a - b);
        const thresholdX = (sortedCx[1] + sortedCx[2]) / 2;

        // find vertical threshold similarly
        const sortedCy = withCenters.map((m) => m.cy).sort((a, b) => a - b);
        const thresholdY = (sortedCy[1] + sortedCy[2]) / 2;

        // assign region_id based on which side of each threshold the center falls
        return withCenters.map(({ cx, cy, ...m }): SquareWithId => {
            const horizontal = cx < thresholdX ? "l" : "r";
            const vertical = cy < thresholdY ? "t" : "b";
            let region_id;

            if (vertical === "t" && horizontal === "l") region_id = "marker_tl";
            else if (vertical === "t" && horizontal === "r")
                region_id = "marker_tr";
            else if (vertical === "b" && horizontal === "l")
                region_id = "marker_bl";
            else region_id = "marker_br";

            return { ...m, region_id };
        });
    };

    answerAssignRegionsID = (answers: Square[][]): SquareWithId[][] => {
        return answers.map((answer, i) => {
            return answer.map((choice, j) => {
                return {
                    ...choice,
                    region_id: `answer_${i + 1}_${j + 1}`,
                };
            });
        });
    };

    lineAssignRegionsID = (lines: Square[]): SquareWithId[] => {
        return lines.map((line, i) => ({
            ...line,
            region_id: `line_${i + 1}`,
        }));
    };

    stdIdFillAssignRegionsID = (stdIdNumbers: Square[][]): SquareWithId[][] => {
        return stdIdNumbers.map((number_position, i) =>
            number_position.map((digit, j) => ({
                ...digit,
                region_id: `std-id-fill_${i + 1}_${j}`,
            }))
        );
    };
}

const templateUtils = new TemplateUtils();
export default templateUtils;
