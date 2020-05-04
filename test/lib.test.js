const SUT = require('../');

describe('pino-prettier', () => {
    describe('when called with --config <path>', () => {
        const mockProcess = { argv: ["node", "bin.js", "-C", "not.the.config.js"] };
        before(() => {
            SUT({ process: mockProcess });
        });

        it('should replace it with our baked in file', () => {
            Should(mockProcess.argv.pop().replace(process.cwd(), '~')).eql('~/lib/pino-pretty.config.js')
        });
    });
});
