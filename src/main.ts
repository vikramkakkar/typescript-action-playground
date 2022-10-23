import * as core from '@actions/core'
import * as github from '@actions/github'
// import {wait} from './wait'

async function run(): Promise<void> {
  console.log('running action...')
  try {
    /*const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())*/

    // const teams: string = 'owner-team'
    const teamMembers = await github
      .getOctokit('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')
      .rest.teams.getByName({
        org: 'appeaser',
        team_slug: 'owner-team'
      })
    core.info(`team members: ${teamMembers}`)
    core.setOutput('here time', new Date().toTimeString())
  } catch (error) {
    core.info('Got an error')
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
