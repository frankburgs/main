# Database
- Schema is a collection of tables, a db can have more than one.
- A table is 1 or more columns of data.
- Secure, removes redundancy, program-data independence, shares data multi user transactions, adheres to ACID concept, self describing, multiple view support, allows table formation, multi-user environment.

## Permissions
- Only a DBA or object owner can provide or remove permissions.
- Public role is automatically assigned to user.

### Database
- Right to execute a specific SQL statement.
- Access second persons's object.
- Control computing resources.
- Does not apply to DBA.

### System
- Right to perform any activity.
- Ability to add or delete columns or rows.

### Object
- Right to perform specific actions.
- Allows users to UPDATE, DELETE, INSERT, or SELECT data.
- Object's owner has permissions for that object.

## Types of data
### Structured
- Tabular data, rows & cols.
- These are relational databases.
- Formed set of data.
### Semi-structured
- Like JSON, also contain graph databases.
### Unstructured
- Not in predefined model or data structure.
- Text heavy files, but may contain numbers and dates.
- Videos, audio, sensor data, and other types.
- S

## Commands

``` sql
select column 1, column 2, FROM table 1, table 2, WHERE column2='value';

GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO smithj;

REVOKE DELETE ON employees FROM anderson;

DENY DELETE ON employees TO jack;

```