// npm packages
import React from 'react';

// our packages
import THead from './thead';
import TFoot from './tfoot';
import TBody from './tbody';
import TablePropTypes from './propTypes';

const Table = ({head, body, foot}) => (
  <section>
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <table className="table">
                <THead data={head} />
                <TFoot data={foot} />
                <TBody data={body} />
              </table>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);
Table.propTypes = {
  head: TablePropTypes.tableHead,
  foot: TablePropTypes.tableFoot,
  body: TablePropTypes.tableBody,
};

export default Table;
