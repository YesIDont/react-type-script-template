module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message) => message.trim() === 'Initialize project using Create React App'],
};
